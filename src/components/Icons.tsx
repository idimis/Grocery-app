interface IconProps {
    isActive: boolean;
    onClick: () => void;
  }
  
  export const HeartIcon = ({ isActive, onClick }: IconProps) => (
    <button onClick={onClick}>
      {isActive ? (
        <svg className="w-6 h-6 text-red-500" fill="currentColor">
          <path d="..." />
        </svg>
      ) : (
        <svg className="w-6 h-6 text-gray-400" fill="currentColor">
          <path d="..." />
        </svg>
      )}
    </button>
  );
  