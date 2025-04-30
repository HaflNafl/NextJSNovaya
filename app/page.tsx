import { Container } from "@/components/shared/container";
import { Title } from "@/components/shared/title";
import { TopBar } from "@/components/shared/topbar";

import { ProductsGroupList } from "@/components/shared/products-group-list";
import { FilterCheckbox } from "@/components/shared/filter-checkbox";


export default function Home() {
  return (
    <>
    <Container>
      <Title text="Все пиццы не для тебя" size="lg" className="font-extrobold"/>
    </Container>
    <TopBar/>
    <div className="flex-1">
      
      <div className="flex flex-col gap-16">
        <ProductsGroupList title="Пиццы" items={[{
          id: 1,
          name: "МегаПицца",
          imageUrl: 'https://sun9-39.userapi.com/impg/1r3RejwpI1ob07MM7z2UXqY_6HgTtSglFmlRtQ/Hs6VbIU6Y_s.jpg?size=1290x892&quality=95&sign=acd5f60a6dc932b708499e7050af54e6&c_uniq_tag=IKA1ZdG7DZAI_NO3ZJFR0TuTC4jHi5s1PuNBWkuYODU&type=album',
          price: 1000000,
          items: [{price: 0}]
        },
        {
          id: 2,
          name: "Пицца с пепе",
          imageUrl: 'https://avatars.mds.yandex.net/i?id=265b2a2d38b77aa1c7df6cbdbba4181f_l-5333586-images-thumbs&n=13',
          price: 5000000000,
          items: [{price: 5000000000}]
        },
        {
          id: 3,
          name: "Злая пицца",
          imageUrl: 'https://avatars.mds.yandex.net/i?id=4cc2ba0f22c5d5d7ab4605b337ad2f31_sr-3600087-images-thumbs&n=13',
          price: 47000,
          items: [{price:47000 }]
        },
        {
          id: 4,
          name: "Пицца 3(Никогда не дождешься)",
          imageUrl: 'https://avatars.mds.yandex.net/i?id=42a1213aca80875839e114896cc7a365_l-4536759-images-thumbs&n=13',
          price: 10000000000000000000000000000000000,
          items: [{price: 10000000000000000000000000000000000}]
        },
        {
          id: 5,
          name: "Пицца загадка (решишь получишь пиццу)",
          imageUrl: 'https://i.pinimg.com/originals/75/7b/34/757b3481511bd182a1327bb6241201b0.png',
          price: 0,
          items: [{price: 0}]
        },
        {
          id: 6,
          name: "Пицаа-хоррор",
          imageYrl: 'https://blogofthefed.wordpress.com/wp-content/uploads/2012/05/img_1656.jpg',
          price: 13000,
          items: [{price: 13000}]
        }
      
        ]} caterogyId={1}/>
      </div>
    </div>
    </>
  );
}
