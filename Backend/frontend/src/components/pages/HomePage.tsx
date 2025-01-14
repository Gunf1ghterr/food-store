import { useEffect } from "react";
import { ProductContainer } from "../elements/containers/ProductContainer";

export const HomePage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <main>
        <div className="container">
          <div className="row">
            <ProductContainer
              id={1}
              description="Небольшой пример текста, который должен основываться на
                    названии карточки и составлять основную часть содержимого
                    карточки."
              image="./logo.jpg"
              title="Карточка товара11111111"
            />
            <ProductContainer
              id={2}
              description="Небольшой пример текста, который должен основываться на
                    названии карточки и составлять основную часть содержимого
                    карточки."
              image="./logo.jpg"
              title="Карточка товара22222"
            />
            <ProductContainer
              id={3}
              description="Небольшой пример текста, который должен основываться на
                    названии карточки и составлять основную часть содержимого
                    карточки."
              image="./logo.jpg"
              title="Карточка товара"
            />
            <ProductContainer
              id={4}
              description="Небольшой пример текста, который должен основываться на
                    названии карточки и составлять основную часть содержимого
                    карточки."
              image="./logo.jpg"
              title="Карточка товара"
            />
          </div>
        </div>
      </main>
    </>
  );
};
