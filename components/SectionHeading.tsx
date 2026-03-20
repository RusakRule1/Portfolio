interface Props {
  title: string;
  subtitle?: string;
}

export default function SectionHeading({ title, subtitle }: Props) {
  return (
    <div>
      <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
        {title}
      </h2>
      <div className="mt-2 h-1 w-12 bg-gradient-to-r from-violet-600 to-indigo-500 rounded" />
      {subtitle && (
        <p className="mt-4 text-slate-500 dark:text-gray-400 text-sm">
          {subtitle}
        </p>
      )}
    </div>
  );
}
