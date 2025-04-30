import { Input } from "../ui/input";
import React from "react";
import { FilterCheckbox } from "../shared/filter-checkbox";
import { Title } from "../shared/title";
import { CheckboxFiltersGroup } from "./checkbox-filters-group";

interface Props{
    className? : string;
}

export const Filters: React.FC<Props> = ({ className}) =>{
    return(
<div>
      <div className={className}>
        <Title text="Фильрация" size="sm" className="mb-5 font-bold" />

        <div className="flex flex-col gap-4">
                <FilterCheckbox text="Можно собирать" value="1" />
                <FilterCheckbox text="Новинки" value="2" />
        </div>
        </div>

        <div className="mt-5 border-y border-y-neutral-100 py-6 pb-7">
            <p className="font-bold mb-3">цена от и до:</p>
            <div className="flex gap-3 mb-5">
                <Input type = "number" placeholder="0" min = {0} max = {5000} defaultValue = {0} />
                <Input type="number" min={100} max={5000} placeholder="5000" />
 
            </div>
        </div>

        <CheckboxFiltersGroup
                className="mt-5"
                title="Ингридиенты"
                limit={6}
                defaultItems={[
                    {
                        text: 'Сырный соус',
                        value: '1',
                    },
                    {
                        text: 'Моцарелла',
                        value: '2',
                    },
                    {
                        text: 'Чеснок',
                        value: '3',
                    },
                ]}
                items={[
                    {
                        text: 'Сырный соус',
                        value: '1',
                    },
                    {
                        text: 'Моцарелла',
                        value: '2',
                    },
                    {
                        text: 'Шлепок по твоему лицу',
                        value: '3'
                    },
                    {
                        text: 'Пинок по твоей ленивой заднице',
                        value: '4',
                    },
                    {
                        text: 'Кинуть тебя через прогиб',
                        value: '5',
                    },
                    {
                        text: 'Томаты',
                        value: '6',
                    }
                ]} searchInputPlaceholder={""}        />
</div>


);
}