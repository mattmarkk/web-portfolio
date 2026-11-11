

const GlowStyle = () => ({
    textShadow: `
        0 0 5px color-mix(in srgb, currentColor 40%, transparent),
        0 0 15px color-mix(in srgb, currentColor 50%, transparent),
        0 0 70px color-mix(in srgb, currentColor 70%, transparent)
    `,
});

// @ts-ignore
export default function GlowingText({ children, className = '' }){

    return (
      <span style={GlowStyle()} className={className}>
          {children}
      </span>
    );
}
