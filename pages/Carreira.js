import { View, Text, Image } from "react-native";


export default function Carreira() {
    return (
        <View style={{ marginTop: 100 }}>
            <View>
                <Text style={{ fontSize: 40, left: 20 }}>Carreira</Text>

            </View>
            <View >
                <View>
                    <Text style={{ marginTop: 20, fontSize: 20, left: 20, fontWeight: "bold" }}>Dev Full Stack Junior</Text>
                    <Text style={{ marginTop: 10, left: 20 }}>outubro 2022- Atualmente</Text>
                </View>
                <View>
                    <Image style={{ left: 220 }} source={require('../assets/img1.png')} />
                </View>

                <View style={{ marginTop: 100 }}>
                    <Text style={{ fontSize: 40, right: 10, textAlign: "right" }}>Escolaridade</Text>

                </View>
                <View >
                    <View>
                        <Text style={{ marginTop: 20, fontSize: 16, right: 10, fontWeight: "bold", textAlign: "right" }}>Universidade Católica de Pernambuco- Recife/PE
                        </Text>
                        <Text style={{ marginTop: 10, right: 10, textAlign: "right" }}>Sistemas Para Internet 2021-2023</Text>
                    </View>
                    <View>
                        <Text style={{ marginTop: 20, fontSize: 16, right: 10, fontWeight: "bold", textAlign: "right" }}>Curso- WebMaster
                        </Text>
                        <View style={{ marginTop: 10, right: 10}}>
                            <Text style={{textAlign: "right"}} >Com carga horaria de 30 horas</Text>
                            <Text style={{textAlign: "right"}} >4 horas – empreendedorismo</Text>
                            <Text style={{textAlign: "right"}} >26 horas - HTML</Text>
                        </View>
                    </View>
                   
                </View>
            </View>
            <View>
                    <Image source={require('../assets/img2.png')} />
                </View>
        </View>
    )
}