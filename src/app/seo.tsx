type Props = {
  title?: string;
  pathname?: string;
  description: string;
  imageUrl?: string;
};

export default function SEO({
  title = "",
  pathname = "",
  description,
  imageUrl = "",
}: Props) {
  return (
    <>
      <head>
        <title>{`${title} | 포트폴리오`}</title>
      </head>
      <meta name="description" content={description} />
    </>
  );
}
