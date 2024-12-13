import React from "react";
import { CustomHeader } from "../../component/common/CustomHeader";
import { Image, Text, View } from "react-native";
import { BLACK, WHITE } from "../../constants/color";
import { COMICS } from "../../constants/fontPath";
import { RIGHTARROW } from "../../constants/imagePath";

export default SignInScreen = () => {
    return (
        <>
            <CustomHeader
                leftHeaderBtn={true}
                midtxt="Sign In & Security"
            />
            <View style={{
                flex: 1,
                backgroundColor: WHITE
            }}>

                <Text style={{
                    color: BLACK,
                    fontSize: 22,
                    fontWeight: "bold",
                    marginLeft: 20

                }}>
                    Profile Information
                </Text>
                <View style={{
                    height: 10
                }} />
                <View style={{
                    flexDirection: "row",
                    marginTop: 10,
                    paddingHorizontal: 10,
                    borderBottomWidth: 1,
                    borderBottomColor: "grey",
                }}>
                    <View style={{
                        flex: 2 / 3,
                        backgroundColor: WHITE

                    }}>
                        <Text style={{
                            color: BLACK,
                            fontSize: 17,
                            fontFamily: COMICS,
                            marginLeft: 20
                        }}>
                            Email addresses
                        </Text>
                    </View>

                    <View style={{
                        flex: 1 / 3,
                        justifyContent: "center",
                        alignItems: "center",
                    }}>
                        <Image
                            source={RIGHTARROW}
                            style={{
                                height: 30,
                                width: 30
                            }}
                        />
                    </View>
                </View>

                <View style={{
                    height: 10
                }} />
                <View style={{
                    flexDirection: "row",
                    marginTop: 10,
                    paddingHorizontal: 10,
                    borderBottomWidth: 1,
                    borderBottomColor: "grey",
                }}>
                    <View style={{
                        flex: 2 / 3,
                        backgroundColor: WHITE

                    }}>
                        <Text style={{
                            color: BLACK,
                            fontSize: 17,
                            fontFamily: COMICS,
                            marginLeft: 20
                        }}>
                            Phone numbers
                        </Text>
                    </View>

                    <View style={{
                        flex: 1 / 3,
                        justifyContent: "center",
                        alignItems: "center",
                    }}>
                        <Image
                            source={RIGHTARROW}
                            style={{
                                height: 30,
                                width: 30
                            }}
                        />
                    </View>
                </View>

                <View style={{
                    height: 10
                }} />
                <View style={{
                    flexDirection: "row",
                    marginTop: 10,
                    paddingHorizontal: 10,
                    borderBottomWidth: 1,
                    borderBottomColor: "grey",
                }}>
                    <View style={{
                        flex: 2 / 3,
                        backgroundColor: WHITE

                    }}>
                        <Text style={{
                            color: BLACK,
                            fontSize: 17,
                            fontFamily: COMICS,
                            marginLeft: 20
                        }}>
                            Passkeys
                        </Text>
                    </View>

                    <View style={{
                        flex: 1 / 3,
                        justifyContent: "center",
                        alignItems: "center",
                    }}>
                        <Image
                            source={RIGHTARROW}
                            style={{
                                height: 30,
                                width: 30
                            }}
                        />
                    </View>
                </View>

                <View style={{
                    height: 10
                }} />
                <View style={{
                    flexDirection: "row",
                    marginTop: 10,
                    paddingHorizontal: 10,
                    borderBottomWidth: 1,
                    borderBottomColor: "grey",
                }}>
                    <View style={{
                        flex: 2 / 3,
                        backgroundColor: WHITE

                    }}>
                        <Text style={{
                            color: BLACK,
                            fontSize: 17,
                            fontFamily: COMICS,
                            marginLeft: 20
                        }}>
                            Where you're signed in
                        </Text>
                    </View>

                    <View style={{
                        flex: 1 / 3,
                        justifyContent: "center",
                        alignItems: "center",
                    }}>
                        <Image
                            source={RIGHTARROW}
                            style={{
                                height: 30,
                                width: 30
                            }}
                        />
                    </View>
                </View>

                <View style={{
                    height: 10
                }} />
                <View style={{
                    flexDirection: "row",
                    marginTop: 10,
                    paddingHorizontal: 10,
                    borderBottomWidth: 1,
                    borderBottomColor: "grey",
                }}>
                    <View style={{
                        flex: 2 / 3,
                        backgroundColor: WHITE

                    }}>
                        <Text style={{
                            color: BLACK,
                            fontSize: 17,
                            fontFamily: COMICS,
                            marginLeft: 20
                        }}>
                            Device that remember your password
                        </Text>
                    </View>

                    <View style={{
                        flex: 1 / 3,
                        justifyContent: "center",
                        alignItems: "center",
                    }}>
                        <Image
                            source={RIGHTARROW}
                            style={{
                                height: 30,
                                width: 30
                            }}
                        />
                    </View>
                </View>

                <View style={{
                    height: 10
                }} />
                <View style={{
                    flexDirection: "row",
                    marginTop: 10,
                    paddingHorizontal: 10,
                    borderBottomWidth: 1,
                    borderBottomColor: "grey",
                }}>
                    <View style={{
                        flex: 2 / 3,
                        backgroundColor: WHITE

                    }}>
                        <Text style={{
                            color: BLACK,
                            fontSize: 17,
                            fontFamily: COMICS,
                            marginLeft: 20
                        }}>
                            Two-step verification
                        </Text>
                    </View>

                    <View style={{
                        flex: 1 / 3,
                        justifyContent: "center",
                        alignItems: "center",
                    }}>
                        <Image
                            source={RIGHTARROW}
                            style={{
                                height: 30,
                                width: 30
                            }}
                        />
                    </View>
                </View>

                <View style={{
                    height: 10
                }} />
                <View style={{
                    flexDirection: "row",
                    marginTop: 10,
                    paddingHorizontal: 10,

                }}>
                    <View style={{
                        flex: 2 / 3,
                        backgroundColor: WHITE

                    }}>
                        <Text style={{
                            color: BLACK,
                            fontSize: 17,
                            fontFamily: COMICS,
                            marginLeft: 20
                        }}>
                            App Lock
                        </Text>
                    </View>

                    <View style={{
                        flex: 1 / 3,
                        justifyContent: "center",
                        alignItems: "center",
                    }}>
                        <Image
                            source={RIGHTARROW}
                            style={{
                                height: 30,
                                width: 30
                            }}
                        />
                    </View>
                </View>
            </View>
        </>
    )
}