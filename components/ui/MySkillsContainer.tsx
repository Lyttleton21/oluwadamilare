interface Props {
  imageUrl: string;
}

export default function MySkillsContainer({ imageUrl }: Props) {
  return (
    <div
      className="h-60 w-60"
      style={{
        background: `url(${imageUrl})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        borderRadius: "15px",
      }}
    />
  );
}
