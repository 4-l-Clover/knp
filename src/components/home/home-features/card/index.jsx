import clsx from 'clsx';
import { PCLineChartIcon } from 'src/icons/pc-line-chart-icon';

export const FeatureCard = ({ title, delay }) => {
  return (
    <div
      data-aos='fade-left'
      data-aos-once='false'
      {...(delay && { 'data-aos-delay': delay })}
      className={clsx(
        'pt-10 xl:w-[220px] xl:h-[448px] bg-white shrink-0 flex flex-col border border-[#003F5C20]'
      )}
    >
      <div className='text-[66px] flex justify-center'>
        <PCLineChartIcon fontSize='inherit' />
      </div>
      <p className="pt-16 mt-2 px-9 text-[20px] font-['Roboto']">{title}</p>
    </div>
  );
};
