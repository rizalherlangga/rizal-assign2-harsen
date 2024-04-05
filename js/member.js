// const cardMember = [
//     {
//         images: "./images/marsha/marsha1.jpg",
//         name: "Marsha Lenathea Lapian",
//         tags: "Marsha-Gen 9",
//         url : "./detail-marsha.html"
//     },
//     {
//         images: "./images/zee/zee1.jpg",
//         name: "Azizi Shafa Asadel",
//         tags: "Zee-Gen 7",
//         url : "./detail-zee.html"
//     },
//     {
//         images: "./images/gita/Gita1.jpeg",
//         name: "Gita Sekar Andarini",
//         tags: "Gita-Gen 6",
//         url : "./detail-gita.html"
//     },
//     {
//         images: "./images/muthe/muthe1.jpeg",
//         name: "Mutiara Azzahra",
//         tags: "Muthe-Gen 7",
//         url : "./detail-muthe.html"
//     },
//     {
//         images: "./images/fiony/fiony1.jpeg",
//         name: "Fiony Alveria Tantri",
//         tags: "Fiony-Gen 8",
//         url : "./detail-fiony.html"
//     },
//     {
//         images: "./images/gracia/gracia1.jpeg",
//         name: "Shania Gracia",
//         tags: "Gracia-Gen 3",
//         url : "./detail-gracia.html"
//     },
//     {
//         images: "./images/shani/Shani1.jpeg",
//         name: "Shani Indira Natio",
//         tags: "Shani-Gen 3",
//         url : "./detail-shani.html"
//     },
//     {
//         images: "./images/ashel/ashel1.jpeg",
//         name: "Adzana Shaliha",
//         tags: "Ashel-Gen 9",
//         url : "./detail-ashel.html"
//     }
// ];

async function getDataMember() {
    const getData = await fetch('data/member.json')
    const data = await getData.json();

    return await data
}

async function allMember() {
    const cardMember = await getDataMember()
    let memberHTML = "";


    cardMember.forEach((card) => {

        const url = `/detail.html?id=${card.id}`


        memberHTML += `
        <div class="w-[265px] py-[16px] px-[14px] flex flex-col gap-[10px] rounded-[20px] border border-solid border-gray-300 shadow-[2px_2px_5px_0px_#221F1F40]" >
            <img src="${card.images}" class="h-[230px] object-cover rounded-[20px]" alt="">
            <h4 class="font-bold text-[14px]"><a href="#" onclick="handleCardClick('${url}')">${card.name}</a></h4>
            <p class="text-neutral-500 font-normal text-end text-[12px]">${card.tags}</p>
        </div>`;
    });

    document.querySelector(".bio-member").innerHTML = memberHTML;
}



allMember();