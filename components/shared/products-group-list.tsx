import { cn } from "@/lib/utils";
import { Title } from "./title";
import { ProductCard } from "./product-card";

interface Props {
    title: string;
    items: any[];
    caterogyId: number;
    className?: string;
    listClassName?: string;
}

export const ProductsGroupList: React.FC<Props> = ({
    title,
    items,
    caterogyId,
    className,
    listClassName
}) => {
    return (
    <div className={className}>
        <Title text={title} size="lg" className="font-exrabold mb-5" />
        <div className={cn(`grid grid-cols-3 gap-[50px]`, listClassName)}>
            {items.map((product, i) =>(
                <ProductCard
                key={product.id} //униКАЛьный ключ
                id={product.id} //передача id товара для корректной работы ссылок 
                name={product.name} //название товара
                imageUrl={product.imageUrl}// URL ссылка на фотку товара 
                price={product.items[0].price} // цена первого варианта товара
                />
            ))}
        </div>
    </div>
    );
}