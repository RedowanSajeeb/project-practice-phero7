
const getRendomAdvice = async (searchKey = '') => {
    let url = `https://api.adviceslip.com/advice${searchKey === '' ? '' : `/search/${searchKey}`}`;
    try {
        const res = await fetch(url);
        const data = await res.json();
        viewUI(data)

    } catch (error) {
        console.log(error)
        alert('‘‘Sorry, there was a problem, we are working on it. Please try again later.’’')
    }
}
getRendomAdvice()

function getSearchInputValue() {
    const myInput = document.getElementById("searchInput");
    const inputValue = myInput.value.trim();
    getRendomAdvice(inputValue)
}


function viewUI(data) {
    if (data.slip) {
        document.getElementById('rendomAdvice').innerHTML = (
            `
            <div>
                <p class="text-green-400 font-medium text-sm font-roboto"> ADVICE #${data.slip.id}</p>
                <p class="text-2xl font-roboto text-center font-medium">
                    ‘‘${data.slip.advice}’’
                </p>
                <div class="inline-flex items-center justify-center w-full">
                    <hr class="w-64 h-[1px] my-8 bg-gray-400 border-0 rounded dark:bg-gray-700">
                    <div class="absolute px-4 -translate-x-1/2 bg-gray-600 left-1/2 dark:bg-gray-900">
                        <svg aria-hidden="true" class="w-5 h-5 text-gray-200 dark:text-gray-300" viewBox="0 0 24 27"
                            fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
                                fill="currentColor" />
                        </svg>
                    </div>
                </div>
            </div>
            `
        );
    }
    else if (data.total_results) {

        document.getElementById('rendomAdvice').innerHTML = data.slips.map((item, i) => (
            `
            <div>
                <p class="text-green-400 font-medium text-sm font-roboto"> ADVICE #${item.id}</p>
                <p class="text-2xl font-roboto text-center font-medium">
                    ‘‘${item.advice}’’
                </p>
                <div class="inline-flex items-center justify-center w-full">
                    <hr class="w-64 h-[1px] my-8 bg-gray-400 border-0 rounded dark:bg-gray-700">
                    <div class="absolute px-4 -translate-x-1/2 bg-gray-600 left-1/2 dark:bg-gray-900">
                        <svg aria-hidden="true" class="w-5 h-5 text-gray-200 dark:text-gray-300" viewBox="0 0 24 27"
                            fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
                                fill="currentColor" />
                        </svg>
                    </div>
                </div>
            </div>
            `
        ));
    }
    else if(data.message){
        document.getElementById('rendomAdvice').innerHTML = (
            `
            <div>
                <p class="text-red-400 font-medium text-sm font-roboto"> Type #${data.message.type}</p>
                <p class="text-2xl font-roboto text-center font-medium text-red-500">
                    ‘‘${data.message.text}’’
                </p>
                <div class="inline-flex items-center justify-center w-full">
                    <hr class="w-64 h-[1px] my-8 bg-gray-400 border-0 rounded dark:bg-gray-700">
                    <div class="absolute px-4 -translate-x-1/2 bg-gray-600 left-1/2 dark:bg-gray-900">
                        <svg aria-hidden="true" class="w-5 h-5 text-gray-200 dark:text-gray-300" viewBox="0 0 24 27"
                            fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
                                fill="currentColor" />
                        </svg>
                    </div>
                </div>
            </div>
            ` 
        )
    }
    else{
        document.getElementById('rendomAdvice').innerHTML = (
            `
            <div>
                <p class="text-green-400 font-medium text-sm font-roboto"> 🙁</p>
                <p class="text-2xl font-roboto text-center font-medium text-yellow-600">
                    ‘‘Sorry, there was a problem, we are working on it. Please try again later.’’
                </p>
                <div class="inline-flex items-center justify-center w-full">
                    <hr class="w-64 h-[1px] my-8 bg-gray-400 border-0 rounded dark:bg-gray-700">
                    <div class="absolute px-4 -translate-x-1/2 bg-gray-600 left-1/2 dark:bg-gray-900">
                        <svg aria-hidden="true" class="w-5 h-5 text-gray-200 dark:text-gray-300" viewBox="0 0 24 27"
                            fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
                                fill="currentColor" />
                        </svg>
                    </div>
                </div>
            </div>
            `
        )
    }
}