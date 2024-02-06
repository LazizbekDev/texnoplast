import { Fragment, useRef } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import {AiFillEdit} from "react-icons/ai";

export default function Popup({open, close, square}) {
    const cancelButtonRef = useRef(null)

    return (
        <Transition.Root show={open} as={Fragment}>
            <Dialog as="div" className="relative z-10" initialFocus={cancelButtonRef} onClose={close}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                </Transition.Child>

                <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                    <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            enterTo="opacity-100 translate-y-0 sm:scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        >
                            <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                                <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                                    <div className="sm:flex sm:items-start">
                                        <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-black sm:mx-0 sm:h-10 sm:w-10">
                                            <AiFillEdit className="h-6 w-6 text-[#DE5801]" aria-hidden="true" />
                                        </div>
                                        <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                                            <Dialog.Title as="h3" className="text-base font-semibold leading-6 text-gray-900">
                                                <img
                                                    src={"https://static.wixstatic.com/media/0a5b98_a0f55dd2be9f4f639003334e64a37923~mv2.png/v1/fill/w_328,h_75,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/96affd68-1e0b-43ce-a71f-5d93823de192.png"}
                                                    alt={"logo"}
                                                    className={"md:ml-0 mx-auto"}
                                                    width={170}
                                                />
                                            </Dialog.Title>
                                            <div className="mt-2">
                                                <p className="text-sm text-gray-500">
                                                    Здравствуйте, мы очень рады, что выбрали нас!<br/>
                                                    <b>площадь твоего дома, который ты выбрал,
                                                        составляет {square} квадратных метров</b> <br/>
                                                    В поиске приключений? Мы обучили почтовых голубей для тех, кто
                                                    предпочитает уникальные способы связи. Прикрепите свое сообщение к
                                                    лапке голубя, пожелайте ему удачи, и посмотрите, как ваши слова
                                                    поднимаются ввысь. Шутим... но, может быть, вам это приглянется
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                                    <a target={"_blank"} rel={"noreferrer"} href={"https://instagram.com/tehnoplast.uz"}>
                                        <button
                                            type="button"
                                            className="inline-flex w-full justify-center rounded-md bg-[#DE5801] px-3 py-2 text-sm font-semibold text-black shadow-sm hover:bg-yellow-500 sm:ml-3 sm:w-auto"
                                            onClick={close}
                                        >
                                            свяжитесь с нами
                                        </button>
                                    </a>
                                    <button
                                        type="button"
                                        className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                                        onClick={close}
                                        ref={cancelButtonRef}
                                    >
                                        отмена
                                    </button>
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition.Root>
    )
}
