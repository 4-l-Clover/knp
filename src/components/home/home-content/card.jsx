import clsx from 'clsx';
import { PackageBlackIcon } from 'src/icons/package-black-icon';

export const ContentCard = ({ title }) => {
  return (
    <div
      // data-aos='fade-left'
      // data-aos-once='false'
      // {...(delay && { 'data-aos-delay': delay })}
      className={clsx('flex items-center justify-evenly w-[328px] h-[220px] rounded-xl bg-secondary')}
    >
      <div className='text-[52px]'>
        <PackageBlackIcon fontSize='inherit' />
      </div>
      <p className='font-["Roboto"] font-bold text-[20px] text-white whitespace-pre'>{title}</p>
    </div>
  );
};
