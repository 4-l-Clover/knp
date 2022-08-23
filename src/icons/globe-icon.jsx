import { SvgIcon } from "@mui/material";

export function GlobeIcon(props) {
  return (
    <SvgIcon {...props}>
      <g transform="translate(1 1)">
        <path
          d="M22.191,12.6A9.6,9.6,0,1,1,12.6,3a9.6,9.6,0,0,1,9.6,9.6Z"
          transform="translate(-3 -3)"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
        <path
          d="M3,18H22.191"
          transform="translate(-3 -8.404)"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
        <path
          d="M15.838,3a14.681,14.681,0,0,1,3.838,9.6,14.681,14.681,0,0,1-3.838,9.6A14.681,14.681,0,0,1,12,12.6,14.681,14.681,0,0,1,15.838,3Z"
          transform="translate(-6.243 -3)"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
      </g>
    </SvgIcon>
  );
}
