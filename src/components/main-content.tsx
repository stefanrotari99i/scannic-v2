const MainContent = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      style={{
        flex: 1,

        overflowY: "auto",
      }}
    >
      {children}
    </div>
  );
};

export default MainContent;
