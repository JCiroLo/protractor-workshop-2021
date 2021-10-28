import { browser, $ } from 'protractor'
import {
  MenuContentPage,
  AddressStepPage,
  BankPaymentPage,
  OrderSummaryPage,
  PaymentStepPage,
  ProductAddedModalPage,
  ProductListPage,
  SignInStepPage,
  SummaryStepPage
} from '../src/page'

describe('Open the page', () => {
  it('then the shop should be opened', async () => {
    await browser.get('http://automationpractice.com/')
  })
})

describe('Buy a t-shirt', () => {
  const menuContentPage: MenuContentPage = new MenuContentPage()
  const addressStepPage: AddressStepPage = new AddressStepPage()
  const bankPaymentPage: BankPaymentPage = new BankPaymentPage()
  const orderSummaryPage: OrderSummaryPage = new OrderSummaryPage()
  it('then should display a login form', async () => {
    await menuContentPage.goToTShirtMenu()
    await addressStepPage.addToCart()
    await bankPaymentPage.proceedToCheckout()
    await orderSummaryPage.proceedToCheckout()
  })
})

describe('Login to aplication', () => {
  const paymentStepPage: PaymentStepPage = new PaymentStepPage()
  it('then should be loged into the app', async () => {
    await paymentStepPage.fillLoginForm(
      'aperdomobo@gmail.com',
      'WorkshopProtractor'
    )
  })
})

describe('Select direction tu deliver', () => {
  const productAddedModalPage: ProductAddedModalPage = new ProductAddedModalPage()
  it('then should be proceed with the buy', async () => {
    await productAddedModalPage.proceedToCheckout()
  })
})

describe('Pay the bill', () => {
  const productListPage: ProductListPage = new ProductListPage()
  const signInStepPage: SignInStepPage = new SignInStepPage()
  const summaryStepPage: SummaryStepPage = new SummaryStepPage()
  it('then should be bought a t-shirt', async () => {
    await productListPage.proceedToCheckout()
    await signInStepPage.PayByBankWire()
    await summaryStepPage.ConfirmMyOrder()
    await expect($('#center_column > div > p > strong').getText()).toBe(
      'Your order on My Store is complete.'
    )
  })
})
