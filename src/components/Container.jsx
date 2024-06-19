const Container = ({ children, className }) => {
  return (
    <div className={`mx-auto py-10 ${className}`}>
      {children}
    </div>
  );
};

export default Container;
