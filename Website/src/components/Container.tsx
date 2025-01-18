interface ContainerProps {
    className?: string;
    children: React.ReactNode;
  }
  
  function Container({ className="",children }: ContainerProps) {
    return (
      <div className={`w-full max-w-7xl  mx-auto px-4 ${className}`}>{children}</div>
    );
  }
  
  export default Container;