import React from 'react';

const Pricing = () => {
    return (
        <section className="py-24 lg:h-[680px] dark:bg-gray-800 dark:text-gray-100">
            <div className="container px-4 mx-auto">
                <div className="max-w-2xl mx-auto mb-16 text-center">
                    <span className="font-bold tracki uppercase dark:text-amber-400">Delivery Plans</span>
                    <h2 className="text-4xl font-bold lg:text-5xl">Choose your delivery plan</h2>
                </div>
                <div className="flex flex-wrap items-stretch -mx-4">
                    <div className="flex w-full mb-8 sm:px-4 md:w-1/2 lg:w-1/3 lg:mb-0">
                        <div className="flex flex-grow flex-col p-6 space-y-6 rounded shadow sm:p-8 dark:bg-gray-900">
                            <div className="space-y-2">
                                <h4 className="text-2xl font-bold">Standard</h4>
                                <span className="text-6xl font-bold">$5
                                    <span className="text-sm tracki">/delivery</span>
                                </span>
                            </div>
                            <p className="mt-3 leadi dark:text-gray-400">Standard delivery within 3-5 business days.</p>
                            <ul className="flex-1 mb-6 dark:text-gray-400">
                                <li className="flex mb-2 space-x-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6 dark:text-amber-400">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                    </svg>
                                    <span>Tracking available</span>
                                </li>
                                <li className="flex mb-2 space-x-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6 dark:text-amber-400">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                    </svg>
                                    <span>Delivery confirmation</span>
                                </li>
                            </ul>
                            <button type="button" className="inline-block px-5 py-3 font-semibold tracki text-center rounded dark:bg-amber-400 dark:text-gray-900">Choose Standard</button>
                        </div>
                    </div>
                    <div className="flex w-full mb-8 sm:px-4 md:w-1/2 lg:w-1/3 lg:mb-0">
                        <div className="flex flex-grow flex-col p-6 space-y-6 rounded shadow sm:p-8 dark:bg-amber-400 dark:text-gray-900">
                            <div className="space-y-2">
                                <h4 className="text-2xl font-bold">Express</h4>
                                <span className="text-6xl font-bold">$10
                                    <span className="text-sm tracki">/delivery</span>
                                </span>
                            </div>
                            <p className="leadi">Express delivery within 1-2 business days.</p>
                            <ul className="flex-1 mb-6 dark:text-gray-400">
                                <li className="flex mb-2 space-x-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                    </svg>
                                    <span>Guaranteed on-time delivery</span>
                                </li>
                                <li className="flex mb-2 space-x-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                    </svg>
                                    <span>Real-time order updates</span>
                                </li>
                            </ul>
                            <a rel="noopener noreferrer" href="#" className="inline-block w-full px-5 py-3 font-bold tracki text-center rounded dark:bg-gray-800 dark:text-amber-400">Choose Express</a>
                        </div>
                    </div>
                    <div className="flex w-full mb-8 sm:px-4 md:w-1/2 lg:w-1/3 lg:mb-0">
                        <div className="flex flex-grow flex-col p-6 space-y-6 rounded shadow sm:p-8 dark:bg-gray-900">
                            <div className="space-y-2">
                                <h4 className="text-2xl font-bold">Premium</h4>
                                <span className="text-6xl font-bold">$15
                                    <span className="text-sm tracki">/delivery</span>
                                </span>
                            </div>
                            <p className="leadi dark:text-gray-400">Premium delivery within 24 hours.</p>
                            <ul className="flex-1 mb-6 dark:text-gray-400">
                                <li className="flex mb-2 space-x-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6 dark:text-amber-400">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                    </svg>
                                    <span>24/7 customer support</span>
                                </li>
                                <li className="flex mb-2 space-x-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6 dark:text-amber-400">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                    </svg>
                                    <span>Special packaging for fragile items</span>
                                </li>
                            </ul>
                            <a rel="noopener noreferrer" href="#" className="inline-block w-full px-5 py-3 font-bold tracki text-center rounded dark:bg-amber-400 dark:text-gray-900">Choose Premium</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Pricing;
