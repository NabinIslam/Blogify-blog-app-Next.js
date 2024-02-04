import Skeleton from 'react-loading-skeleton';

const Loading = () => (
  <main>
    <div className="container mx-auto py-20 px-5">
      <div className="max-w-4xl mx-auto text-center">
        <Skeleton height={70} width={70} borderRadius={'100%'} />

        <Skeleton className="mt-1" height={20} width={100} />
        <Skeleton className="mt-1" height={15} width={200} />
        <Skeleton className="mt-5" height={50} />

        {/* 
        <h4 className="text-sm text-slate-500">{formattedDate}</h4>

        <h1 className="font-bold text-2xl lg:text-3xl mb-5 mt-5">{title}</h1> */}

        <div className="relative max-w-full h-auto mb-10">
          {/* <Image
            className="w-full h-auto rounded-lg"
            src={image}
            width="0"
            height="0"
            sizes="100vw"
            alt={slug}
          /> */}
        </div>

        {/* <div className="text-left">{parse(content)}</div> */}
      </div>
    </div>
  </main>
);

export default Loading;
