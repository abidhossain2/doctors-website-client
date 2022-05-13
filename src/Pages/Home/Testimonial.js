import React from 'react';
import testmonialbg from '../../assets/icons/quote.svg'
import people1 from '../../assets/images/people1.png'
import people2 from '../../assets/images/people2.png'
import people3 from '../../assets/images/people3.png'

const Testimonial = () => {
    return (
        <div className='px-12'>
            <div className='flex justify-between items-center px-12'>
                <div>
                    <h4 className='text-slate-400 text-lg font-bold'>Testimonial</h4>
                    <h3 className='text-slate-600 text-4xl font-bold'>What our patient says</h3>
                </div>
                <div>
                    <img  style={{width:192, height:156}} src={testmonialbg} alt="" />
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-5">
                <div className="card bg-base-100 shadow-xl">
                    <div className="card-body">
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae eum repudiandae enim earum accusantium, sapiente architecto illo dolore quia nam magnam hic quisquam illum impedit vel eligendi modi debitis quidem! Distinctio maxime voluptatum vitae praesentium!</p>
                        <div className="card-actions flex items-center">
                            <div className="avatar my-3">
                                <div className="rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                    <img  style={{width:75, height:75}} src={people1} alt="" />
                                </div>
                            </div>
                            <div className="ml-4">
                                <h4>Winson Herry</h4>
                                <p>California</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card bg-base-100 shadow-xl">
                    <div className="card-body">
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae eum repudiandae enim earum accusantium, sapiente architecto illo dolore quia nam magnam hic quisquam illum impedit vel eligendi modi debitis quidem! Distinctio maxime voluptatum vitae praesentium!</p>
                        <div className="card-actions flex items-center">
                            <div className="avatar my-3">
                                <div className="rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                    <img style={{width:75, height:75}} src={people2} alt="" />
                                </div>
                            </div>
                            <div className="ml-4">
                                <h4>Winson Herry</h4>
                                <p>California</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card bg-base-100 shadow-xl">
                    <div className="card-body">
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae eum repudiandae enim earum accusantium, sapiente architecto illo dolore quia nam magnam hic quisquam illum impedit vel eligendi modi debitis quidem! Distinctio maxime voluptatum vitae praesentium!</p>
                        <div className="card-actions flex items-center">
                            <div className="avatar my-3">
                                <div className=" rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                    <img style={{width:75, height:75}} src={people3} alt="" />
                                </div>
                            </div>
                            <div className="ml-4">
                                <h4>Winson Herry</h4>
                                <p>California</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;