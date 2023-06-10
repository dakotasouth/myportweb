import Link from "next/link";

const BackButton = () => {
  return (
    <div className="min-w-0 py-5 m-auto mx-auto font-sfpro">
        <Link href="/blog">
            <h2 className="text-sm font-bold cursor-pointer text-primary">Back</h2>
        </Link>
    </div>
  );
};

export default BackButton;