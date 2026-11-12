'use client';

import { useEffect, useState } from 'react';

type Activity =
  | { status: 'unavailable' }
  | {
      status: 'connected';
      updatedAt: string;
      conversations: number;
      messages: number;
      categories: { label: string; count: number }[];
    };

const categoryColors = ['#a6533b', '#617847', '#8d609a'];

export function ActivityPanel() {
  const [data, setData] = useState<Activity>();
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    async function update() {
      try {
        const response = await fetch('/api/activity', { cache: 'no-store', signal: controller.signal });
        if (!response.ok) throw new Error('Could not load activity');
        const snapshot: Activity = await response.json();
        if (controller.signal.aborted) return;
        setData(snapshot);
        setFailed(false);
      } catch {
        if (!controller.signal.aborted) setFailed(true);
      }
    }

    void update();
    const timer = setInterval(update, 60_000);
    return () => {
      controller.abort();
      clearInterval(timer);
    };
  }, []);

  const snapshot = data?.status === 'connected' ? data : undefined;
  const categorized = snapshot?.categories.reduce((total, category) => total + category.count, 0) ?? 0;

  return (
    <div className="activity-card">
      {snapshot ? (
        <>
          <div className="portfolio-activity-content">
            <div className="metrics">
              <div><strong>{snapshot.conversations.toLocaleString('en-IN')}</strong><span>Conversations, rounded</span></div>
              <div><strong>{snapshot.messages.toLocaleString('en-IN')}</strong><span>Messages sent, rounded</span></div>
            </div>
            {categorized > 0 && (
              <div className="category-bars" aria-label="Share of displayed categories">
                {snapshot.categories.map(({ label, count }, index) => {
                  const share = count / categorized * 100;
                  const color = categoryColors[index % categoryColors.length];
                  return (
                    <div key={label}>
                      <div><span>{label}</span><span>{Math.round(share)}%</span></div>
                      <div className="bar-track" aria-hidden="true">
                        <span style={{ width: `${share}%`, background: color }} />
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
          <div className="activity-bottom">
            <span>Aggregated counts and broad topics</span>
            <span>{failed ? 'Refresh unavailable · ' : ''}Updated <time dateTime={snapshot.updatedAt}>{snapshot.updatedAt}</time></span>
          </div>
        </>
      ) : (
        <p className="portfolio-activity-empty" role="status">
          {failed ? 'Usage data is temporarily unavailable.' : data ? 'No usage data has been published yet.' : 'Loading usage data…'}
        </p>
      )}
    </div>
  );
}
