/*
  Scroll-reveal wrapper for section content.

  The animation itself lives in index.css and is driven by the browser's
  scroll timeline, so this renders no JavaScript-controlled visibility state
  and the content is always present. `delay` staggers neighbouring items by
  shifting where their reveal starts.
*/
function Reveal({
  children,
  delay = 0,
  className = "",
}) {
  return (
    <div
      className={`reveal ${className}`}
      style={
        delay
          ? { "--reveal-offset": `${Math.round(delay * 30)}%` }
          : undefined
      }
    >
      {children}
    </div>
  )
}


export default Reveal
