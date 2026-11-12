export type CutieKind = 'cat' | 'bunny' | 'robot' | 'blob';

/** Tiny, locally drawn mascots. Decorative; surrounding text carries meaning. */
export function Cutie({ kind = 'blob' }: { kind?: CutieKind }) {
  return <svg className={`cutie cutie-${kind}`} viewBox="0 0 64 64" fill="none" aria-hidden="true" focusable="false">
    {kind === 'cat' ? <><path d="M12 29 9 8l16 11h14L55 8l-3 21c8 23-5 29-20 29S4 52 12 29Z" fill="#E8B58E" stroke="#805E52" strokeWidth="2" strokeLinejoin="round"/><path d="m14 15 2 12 8-6m26-6-2 12-8-6" fill="#F8D8C4" stroke="#BB8870" strokeWidth="1.4"/><path d="m11 39 9 2m-10 4 10-1m33-5-9 2m10 4-10-1" stroke="#A57D67" strokeWidth="1.5" strokeLinecap="round"/></> : null}
    {kind === 'bunny' ? <><path d="M18 30C4 0 21-5 27 25h10C43-5 60 0 46 30c17 22 3 29-14 29S1 52 18 30Z" fill="#E8D8EC" stroke="#8B7296" strokeWidth="2" strokeLinejoin="round"/><path d="M20 22c-5-13-2-17 2-4m20 4c5-13 2-17-2-4" stroke="#D3ABC7" strokeWidth="3" strokeLinecap="round"/></> : null}
    {kind === 'robot' ? <><path d="M32 15V8" stroke="#698C7D" strokeWidth="2"/><circle cx="32" cy="6" r="4" fill="#EBC68B" stroke="#A58961" strokeWidth="1.5"/><rect x="9" y="17" width="46" height="40" rx="14" fill="#CEE3D6" stroke="#698C7D" strokeWidth="2"/><rect x="3" y="30" width="6" height="13" rx="3" fill="#ABC9B9"/><rect x="55" y="30" width="6" height="13" rx="3" fill="#ABC9B9"/></> : null}
    {kind === 'blob' ? <path d="M10 39c-4-10 4-17 9-20 2-13 21-15 26-4 13 1 17 14 13 24 3 14-7 19-14 15-5 8-16 8-21 1C12 60 5 50 10 39Z" fill="#F1D5A2" stroke="#AD8C63" strokeWidth="2" strokeLinejoin="round"/> : null}
    <path d="M23 35v4m18-4v4" stroke={kind === 'robot' ? '#527061' : '#765A62'} strokeWidth="3.4" strokeLinecap="round"/>
    <path d="M27 45q5 6 10 0" stroke={kind === 'robot' ? '#527061' : '#765A62'} strokeWidth="1.8" strokeLinecap="round"/>
    <ellipse cx="18" cy="43" rx="4" ry="2.5" fill="#E3A3A2" opacity=".65"/><ellipse cx="46" cy="43" rx="4" ry="2.5" fill="#E3A3A2" opacity=".65"/>
    {kind === 'cat' || kind === 'bunny' ? <path d="m29 40 3 3 3-3h-6Z" fill="#A77C83"/> : null}
  </svg>;
}
