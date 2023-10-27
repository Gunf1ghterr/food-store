import { OfferContainer } from "../elements/containers/OfferContainer";

export const Offers: React.FC = () => {
  return (
    <main>
      <div className="container">
        <div className="row">
          <OfferContainer
            id={1}
            image="./test-sale.jpg"
            description="Нfsdefsafsdafsdfsdfsdfsdaебольшой пример текста, который должен основываться на
                    названии карточки и составлять основную часть содержимого
                    карточки."
          />
          <OfferContainer
            id={2}
            image="./test-sale.jpg"
            description="Небо11112122222222222льшой пример текста, который должен основываться на
                    названии карточки и составлять основную часть содержимого
                    карточки."
          />
          <OfferContainer
            id={3}
            image="./test-sale.jpg"
            description="Неб44433333333333333333ольшой пример текста, который должен основываться на
                    названии карточки и составлять основную часть содержимого
                    карточки."
          />
        </div>
      </div>
    </main>
  );
};
