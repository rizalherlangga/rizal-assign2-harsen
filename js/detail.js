async function getDataMember() {
    const getData = await fetch('data/detail.json')
    const data = await getData.json();

    return await data
}

async function main() {
    const  getNamaElm = document.getElementById('member-detail')
    const getTitleElm = document.querySelector('title');
    
    const url = window.location.href;
    const params = new URLSearchParams(url.split('?')[1]);

    const id = params.get('id')

    const cardMember = await getDataMember()
    const findMember = cardMember.find(function (member) {
        return member.id == Number(id)
    })

    if (findMember) {
        getTitleElm.innerText = findMember.name;

        getNamaElm.innerHTML = `
        <img
        src="${findMember.images}"
        alt=""
        class="h-[350px] object-cover rounded-[40px] shadow-[0px_50px_200px_-10px_#F472B6] border border-solid border-gray-300"
      />
      <p class="text-[16px] font-medium px-[24px]">
      ${findMember.about}
      </p>
      <div
        class="w-[700px] border-y border-x-0 py-[24px] px-[16px] flex flex-col gap-[10px] border-gray-300 mx-auto"
      >
        <div class="flex justify-between">
          <p class="text-[16px] font-medium text-gray-400">Nama</p>
          <p class="text-[16px] text-neutral-900 font-medium" id="nama_detail">
            ${findMember.name}
          </p>
        </div>
        <div class="flex justify-between">
          <p class="text-[16px] font-medium text-gray-400">Kelahiran</p>
          <p class="text-[16px] text-neutral-900 font-medium">
            ${findMember.date}
          </p>
        </div>
        <div class="flex justify-between">
          <p class="text-[16px] font-medium text-gray-400">Tahun Keaktifan</p>
          <p class="text-[16px] text-neutral-900 font-medium">${findMember.active}</p>
        </div>
      </div>
      <div class="mx-auto text-[25px] text-pink-700 flex gap-[24px]">
        <a href="${findMember.tweet}" target="_blank">
          <i class="fa-brands fa-square-x-twitter"></i>
        </a>
        <a href="${findMember.ig}" target="_blank">
          <i class="fa-brands fa-square-instagram"></i>
        </a>
      </div>`

      

    }

    console.log(findMember)
}


main()