import { styled } from 'styled-components';
import ContentLayout from 'components/@common/ContentLayout';
import PaymentDetail from 'components/Cart/PaymentDetail';
import CartItemList from 'components/Cart/CartItemList';
import Coupon from 'components/Cart/Coupon';
import { useFetchCart } from 'components/Cart/hooks/useFetchCart';

const CartList = () => {
  const { cartList } = useFetchCart();

  return (
    <ContentLayout>
      <Title>🛒 장바구니 🛒</Title>
      <Container>
        <CartItemList cartList={cartList} />
        <PaymentDetailWrapper>
          <PaymentDetail />
          <Coupon />
        </PaymentDetailWrapper>
      </Container>
    </ContentLayout>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 60px;

  @media (min-width: 320px) and (max-width: 1100px) {
    flex-direction: column;
    margin: 0 20px;
  }
`;

const Title = styled.h1`
  height: 60px;
  margin-bottom: 32px;
  text-align: center;
  font: ${(props) => props.theme.font.large};
  border-bottom: 4px solid ${(props) => props.theme.color.primary};
`;

const PaymentDetailWrapper = styled.div`
  position: fixed;
  right: 60px;

  @media (min-width: 320px) and (max-width: 479px) {
    position: unset;
    display: flex;
    flex-direction: column;
  }

  @media (min-width: 480px) and (max-width: 1100px) {
    position: unset;
    display: flex;
    justify-content: center;
  }
`;

export default CartList;
