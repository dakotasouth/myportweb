import Link from "next/link";

const BackButton = () => {
  return (
    <div className="min-w-0 m-auto mx-auto font-inter py-5">
        <Link href="/blog">
            <h2 className="text-sm font-bold text-primary cursor-pointer">Back</h2>
        </Link>
    </div>
  );
};

export default BackButton;