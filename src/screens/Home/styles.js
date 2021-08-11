import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
    flex: 1;
    padding: 60px 25px 0px 25px;
    background-color: #fff;
`

export const Header = styled.View`
    height: 50px;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`

export const UserArea = styled.View`
    flex: 1;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    height: 100%;
`

export const TextArea = styled.View`
    margin-right: 12px;
`

export const AvatarImage = styled.Image`
    height: 50px;
    width: 50px;
    border-radius: 24px;
    margin-right: 1px;
    border-width: 2px;
    border-color: #29c2c2;
`

export const FlatItem = styled.FlatList`
    margin-top: 26px;
`

export const FlatView = styled.TouchableOpacity`
    padding: 5px 14px;
    border-radius: 25px;
`

export const AreaInfo = styled.View`
    width: 100%;
    margin-top: 26px;
    flex-direction: row;
    flex-wrap: wrap;
`

export const AreaBox = styled.TouchableOpacity`
    width: 47%;
    height: 264px;
    margin: 16px 1.5%;
    margin-bottom: 6px;
    justify-content: flex-end;
    align-items: center;
`

export const BoxInfo = styled.ImageBackground`
    width: 100%;
    height: 264px;
    justify-content: flex-end;
    align-items: center;
    position: relative;
`

export const PriceArea = styled.View`
    position: absolute;
    right: 10px;
    top: 10px;
    width: 78px;
    height: 44px;
    background-color: rgba(255,255,255,0.6);
    z-index: 3;
    border-radius: 40px;
    justify-content: center;
    align-items: center;
`

export const BoxInfoDescriptionArea = styled.View`
    width: 100%;
    background-color: transparent;
    border-radius: 10px;
    justify-content: flex-end;
    align-items: center;
`

export const ButtonGo = styled.TouchableOpacity`
    width: 90%;
    height: 36px;
    background-color: white;
    margin-bottom: 10px;
    margin-top: 2px;
    opacity: 0.85;
    justify-content: center;
    align-items: center;
    border-radius: 18px;
`

export const AreaGuia = styled.View`
    width: 100%;
    padding: 10px 0px;
    margin-top: 26px;
`

export const GuiaInfo = styled.TouchableOpacity`
    width: 100%;
    padding: 20px;
    background-color: #eee;
    margin-bottom: 14px;
    justify-content: center;
    align-items: center;
    border-radius: 20px;
`

export const FaunaArea = styled.View`
    width: 100%;
    margin-bottom: 14px;
    justify-content: center;
    align-items: center;
    border-radius: 20px;
    margin-top: 20px;
`

export const ImageGuia = styled.Image`
    width: 200px;
    height: 200px;
    border-radius: 100px;
    margin-bottom: 10px;
`

export const AnimalImage = styled.Image`
    width: 200px;
    height: 200px;
    border-radius: 100px;
    margin-bottom: 10px;
`

export const FaunaItem = styled.View`
    width: 100%;
    padding: 20px;
    justify-content: center;
    align-items: center;
    background-color: #eee;
    margin-bottom: 10px;
    border-radius: 20px;
`

export const ButtonGuia = styled.TouchableOpacity`
    width: 90%;
    height: 36px;
    background-color: white;
    margin-top: 5px;
    opacity: 0.85;
    justify-content: center;
    align-items: center;
    border-radius: 18px;
`

export const PousadaArea = styled.View`
    width: 100%;
    margin-bottom: 14px;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
`

export const PousadaItem = styled.TouchableOpacity`
    width: 100%;
    padding: 24px;
    margin-bottom: 10px;
    background-color: #eee;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border-radius: 20px;
`

export const PousadaImage = styled.Image`
    flex: 1;
    height: 140px;
    border-radius: 200px;
    margin-right: 24px;
`