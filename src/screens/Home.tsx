import React, { FunctionComponent } from "react";
import { StatusBar } from "expo-status-bar";
import styled from "styled-components/native";

// custom components
import { colors } from "../components/colors";
import { Container } from "../components/shared";
import CardSection from "../components/Cards/CardSection";
import TransactionSection from "../components/Transactions/TransactionSection";

const HomeContainer = styled(Container)`
  background-color: ${colors.graylight};
  width: 100%;
  flex: 1;
`

// card logos
import logo1 from "../../assets/cards/visa_white.png";
import logo2 from "../../assets/cards/mc.png";

const Home: FunctionComponent = () => {
  const cardsData = [
    {
      id: 1,
      accountNo: "3658 4587 6985 2141",
      balance: 2544.67,
      alias: "Work Debit",
      logo: logo1,
    },
    {
      id: 2,
      accountNo: "1527 4554 1238 4867",
      balance: 5488.45,
      alias: "Personal Prepaid",
      logo: logo2,
    },
    {
      id: 3,
      accountNo: "4848 5367 5614 5648",
      balance: 3254.67,
      alias: "School Prepaid",
      logo: logo2,
    },
  ]

  const transactionData = [
    {
      id: 1,
      amount: "-$10.58",
      date: "09 Oct 2022",
      title: "Taxi",
      subtitle: "Uber car",
      art: {
        background: colors.primary,
        icon: "car",
      }
    },
    {
      id: 2,
      amount: "-$156.97",
      date: "09 Oct 2022",
      title: "Shopping",
      subtitle: "Grocery",
      art: {
        background: colors.primary,
        icon: "cart",
      }
    },
    {
      id: 3,
      amount: "-$348.23",
      date: "09 Oct 2022",
      title: "Travel",
      subtitle: "Emirates",
      art: {
        background: colors.primary,
        icon: "airplane",
      }
    },
  ]
  
  return (
    <HomeContainer>
      <StatusBar style="dark"/>
      <CardSection data={cardsData} />
      <TransactionSection data={transactionData} />
    </HomeContainer>
  )
}

export default Home;