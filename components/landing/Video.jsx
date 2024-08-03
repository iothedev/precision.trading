import { Modal } from '@/components';
import { useState } from 'react';

function Video() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
                <div className='w-full max-w-screen-lg rounded-2xl border border-border-1 bg-background-2 aspect-video overflow-hidden'>
                    <video src='/video.mp4' controls autoPlay className='w-full h-full' />
                </div>
            </Modal>

            <div className='relative w-full max-w-screen-xl mx-auto -mt-10 px-6 hidden sm:block'>
                <div className='w-full border border-border-1 bg-background-3 rounded-[44px] p-4 sm:p-6 shadow-[inset_0px_4px_6px_0px_rgba(22,28,24,0.4)]'>
                    <div className='relative overflow-hidden w-full h-full rounded-[24px] border border-border-1 bg-background-2 flex items-center justify-center'>
                        <img src='/thumbnail.png' className='h-full w-full object-cover object-right' />

                        {/*<div
                            onClick={() => setIsOpen(!isOpen)}
                            className='my-12 cursor-pointer select-none h-20 sm:h-28 w-20 sm:w-28 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 shadow-md p-4 group duration-150 hover:p-3'
                        >
                            <div className='w-full h-full rounded-full bg-white/15 border border-white/10 flex items-center justify-center'>
                                <IconPlayerPlayFilled />
                            </div>
                        </div>*/}
                    </div>
                </div>
            </div>
        </>
    );
}

export { Video };
