import PropTypes from 'prop-types';

const SectionHeading = ({title, subtitle}) => {
    return (
        <div className='mt-16 mb-10 text-center max-w-[400px] mx-auto'>
            <h2 className='font-semibold text-yellow-600 mb-2'>---{subtitle}---</h2>
            <h1 className='text-3xl font-semibold border-y-2 py-2 uppercase'>{title}</h1>
        </div>
    );
};

SectionHeading.propTypes = {
    title: PropTypes.string,
    subtitle: PropTypes.string
};

export default SectionHeading;