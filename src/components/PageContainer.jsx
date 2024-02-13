import PropTypes from 'prop-types';

const PageContainer = ({ titleOne, titleTwo, children, containerClass }) => {
    
    return (
        <div className="bg-slate-50 min-h-screen p-10 space-y-8">
            <h2 className="text-5xl uppercase font-semibold text-slate-600 text-center"><span className="text-green-500">{titleOne}</span> {titleTwo}</h2>
            <div className={`max-w-screen-md mx-auto ${containerClass}`}>
                {children}
            </div>
        </div>
    );
};

PageContainer.propTypes = {
    titleOne: PropTypes.string,
    titleTwo: PropTypes.string,
    children: PropTypes.node,
    containerClass: PropTypes.string,
}

export default PageContainer;