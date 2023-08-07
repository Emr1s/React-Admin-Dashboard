import React from 'react'
import './TopDeals.scss'

const TopDeals = () => {
  const topDeals =
    [{ "id": 1, "first_name": "Dulsea", "last_name": "Scraggs", "email": "dscraggs0@google.cn", "deals": 6478, "img": "https://robohash.org/providentmaioresfuga.png?size=40x40&set=set1" },
    { "id": 2, "first_name": "Barnebas", "last_name": "Sondon", "email": "bsondon1@lycos.com", "deals": 7970, "img": "https://robohash.org/possimusdoloremlaboriosam.png?size=40x40&set=set1" },
    { "id": 3, "first_name": "Pooh", "last_name": "McDonough", "email": "pmcdonough2@unblog.fr", "deals": 2185, "img": "https://robohash.org/quoomnisaut.png?size=40x40&set=set1" },
    { "id": 4, "first_name": "Jewell", "last_name": "Vreiberg", "email": "jvreiberg3@zdnet.com", "deals": 4573, "img": "https://robohash.org/sintvoluptatemaccusantium.png?size=40x40&set=set1" },
    { "id": 5, "first_name": "Putnam", "last_name": "Letixier", "email": "pletixier4@sphinn.com", "deals": 1677, "img": "https://robohash.org/evenietlaudantiummaiores.png?size=40x40&set=set1" },
    { "id": 6, "first_name": "Ric", "last_name": "Cornejo", "email": "rcornejo5@stanford.edu", "deals": 1911, "img": "https://robohash.org/autatsed.png?size=40x40&set=set1" },
    { "id": 7, "first_name": "Max", "last_name": "Lace", "email": "mlace6@jugem.jp", "deals": 10440, "img": "https://robohash.org/nonquiset.png?size=40x40&set=set1" },
    { "id": 8, "first_name": "Mylo", "last_name": "Purtell", "email": "mpurtell7@latimes.com", "deals": 7392, "img": "https://robohash.org/suntquisminima.png?size=40x40&set=set1" },
    { "id": 9, "first_name": "Selig", "last_name": "Skace", "email": "sskace8@blogtalkradio.com", "deals": 5865, "img": "https://robohash.org/laudantiumnonatque.png?size=40x40&set=set1" },
    { "id": 10, "first_name": "Lindsay", "last_name": "Oaker", "email": "loaker9@pinterest.com", "deals": 3809, "img": "https://robohash.org/istemagnisunt.png?size=40x40&set=set1" },
    { "id": 11, "first_name": "Sonnnie", "last_name": "Frank", "email": "sfranka@naver.com", "deals": 13161, "img": "https://robohash.org/cumassumendaet.png?size=40x40&set=set1" },
    { "id": 12, "first_name": "Myron", "last_name": "Scarbarrow", "email": "mscarbarrowb@sciencedaily.com", "deals": 4624, "img": "https://robohash.org/remlaborumomnis.png?size=40x40&set=set1" },
    { "id": 13, "first_name": "Etheline", "last_name": "Bloodworthe", "email": "ebloodworthec@mediafire.com", "deals": 4220, "img": "https://robohash.org/quoetoptio.png?size=40x40&set=set1" },
    { "id": 14, "first_name": "Shawnee", "last_name": "Fairbourne", "email": "sfairbourned@oakley.com", "deals": 4933, "img": "https://robohash.org/estiustominima.png?size=40x40&set=set1" },
    { "id": 15, "first_name": "Zackariah", "last_name": "Woolbrook", "email": "zwoolbrooke@cnbc.com", "deals": 12401, "img": "https://robohash.org/eoseadolore.png?size=40x40&set=set1" },
    { "id": 16, "first_name": "Margery", "last_name": "Cubin", "email": "mcubinf@godaddy.com", "deals": 5021, "img": "https://robohash.org/estdoloremea.png?size=40x40&set=set1" },
    { "id": 17, "first_name": "Vanda", "last_name": "Marquess", "email": "vmarquessg@uiuc.edu", "deals": 12054, "img": "https://robohash.org/autsitdolorum.png?size=40x40&set=set1" },
    { "id": 18, "first_name": "Haleigh", "last_name": "Owens", "email": "howensh@bbb.org", "deals": 11017, "img": "https://robohash.org/saepeodioet.png?size=40x40&set=set1" },
    { "id": 19, "first_name": "Stefanie", "last_name": "Sabey", "email": "ssabeyi@bing.com", "deals": 6678, "img": "https://robohash.org/quiaeumvoluptatibus.png?size=40x40&set=set1" },
    { "id": 20, "first_name": "Eachelle", "last_name": "Smallshaw", "email": "esmallshawj@nymag.com", "deals": 14015, "img": "https://robohash.org/suntdebitislibero.png?size=40x40&set=set1" }]

  return (
    <div className='topDeals'>
      <h1>Top Deals</h1>
      {topDeals.sort((a, b) => (b.deals - a.deals)).map((item) => (
        <div className="listDeals" key={item.id}>
          <img src={item.img} alt="" />
          <div className="infoUser">
            <p>{item.first_name + " " + item.last_name}</p>
            <span>{item.email}</span>
          </div>
          <div className="price">
            <p className='price'>${item.deals}</p>

          </div>
        </div>
      ))}
    </div>
  )
}

export default TopDeals