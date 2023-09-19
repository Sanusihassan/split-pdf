export const Loader = ({ loader_text, animate = true }: { loader_text: string, animate?: boolean }) => (
  <div className={`${animate ? "loader" : ""}`}>
    <div className={`${animate ? "inner-loader" : ""}`}>{loader_text}</div>
  </div>
);
