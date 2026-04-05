export default function BtnSlepoy({ size, setSize }) {
  const getButtonText = () => {
    if (size === 'base') return 'Увеличить текст';
    if (size === 'large') return 'Ещё увеличить';
    return 'Сбросить размер';
  };

  const toggleSize = () => {
    setSize((prev) => {
      if (prev === 'base') return 'large';
      if (prev === 'large') return 'xlarge';
      return 'base';
    });
  };

  return (
    <button
      className="cursor-pointer text-[13px] hover:text-white transition-all duration-300"
      onClick={toggleSize}
    >
      {getButtonText()}
    </button>
  );
}
