export default function Card({
  children,
  title,
  styles,
}: {
  children: React.ReactNode;
  title: String;
  styles?: String;
}) {
  return (
    <div className={`${styles} p-6`}>
      <h4 className="mb-5 font-semibold	text-lg	">{title}</h4>
      {children}
    </div>
  );
}
