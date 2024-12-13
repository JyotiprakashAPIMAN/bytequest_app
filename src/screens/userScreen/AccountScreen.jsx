import React from "react";
import { CustomHeader } from "../../component/common/CustomHeader";
import { Image, ScrollView, Text, View } from "react-native";
import { BLACK, WHITE } from "../../constants/color";
import { COMICS } from "../../constants/fontPath";
import { RIGHTARROW } from "../../constants/imagePath";

export default AccountScreen = () => {
    return (
        <>
            <CustomHeader
                leftHeaderBtnpress={true}
                midtxt="Account Preference"
            />
            <ScrollView style={{
                flex: 1,
                backgroundColor: WHITE
            }}>
                <View style={{
                    height: 10,

                }} />
                <Text style={{
                    color: BLACK,
                    fontSize: 22,
                    fontWeight: "bold",
                    marginLeft: 20

                }}>
                    Profile Information
                </Text>

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
                            Name, Location & Industry
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
                    flexDirection: "row",
                    marginTop: 10,
                    paddingHorizontal: 10,
                    borderBottomWidth: 1,
                    borderBottomColor: "grey",
                }}>
                    <View style={{
                        flex: 2 / 3,
                        backgroundColor: WHITE,

                    }}>
                        <Text style={{
                            color: BLACK,
                            fontSize: 17,
                            fontFamily: COMICS,
                            marginLeft: 20
                        }}>Personal Demographic Information</Text>
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
                            Verification
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

                <View style={{ borderBottomWidth: 8, borderBottomColor: "grey" }} />

                <View style={{ height: 20 }} />

                <View style={{
                    height: 10,

                }} />
                <Text style={{
                    color: BLACK,
                    fontSize: 22,
                    fontWeight: "bold",
                    marginLeft: 20
                }}>
                    Display
                </Text>
                <View style={{ height: 10 }} />
                <View style={{
                    flexDirection: "row",
                    marginTop: 10,
                    paddingHorizontal: 10,
                    borderBottomWidth: 1,
                    borderBottomColor: "grey",
                }}>
                    <View style={{
                        flex: 2 / 3,
                        backgroundColor: WHITE,
                    }}>
                        <Text style={{
                            color: BLACK,
                            fontSize: 17,
                            fontFamily: COMICS,
                            marginLeft: 20
                        }}>
                            Display Mode
                        </Text>
                    </View>

                    <View style={{
                        flex: 1 / 3,
                        alignItems: "center",
                        justifyContent: "center"
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

                <View style={{ borderBottomWidth: 8, borderBottomColor: "grey" }} />

                <View style={{ height: 20 }} />

                <View style={{
                    height: 10,

                }} />
                <Text style={{
                    color: BLACK,
                    fontSize: 22,
                    fontWeight: "bold",
                    marginLeft: 20
                }}>
                    General Preference
                </Text>
                <View style={{
                    flexDirection: "row",
                    marginTop: 10,
                    paddingHorizontal: 10,
                    borderBottomWidth: 1,
                    borderBottomColor: "grey",
                }}>
                    <View style={{
                        flex: 2 / 3,
                        backgroundColor: WHITE,
                    }}>
                        <Text style={{
                            color: BLACK,
                            fontSize: 17,
                            fontFamily: COMICS,
                            marginLeft: 20
                        }}>
                            Languages
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
                    flexDirection: "row",
                    marginTop: 10,
                    paddingHorizontal: 10,
                    borderBottomWidth: 1,
                    borderBottomColor: "grey",
                }}>
                    <View style={{
                        flex: 2 / 3,
                        backgroundColor: WHITE,
                    }}>
                        <Text style={{
                            color: BLACK,
                            fontSize: 17,
                            fontFamily: COMICS,
                            marginLeft: 20
                        }}>
                            Content Language
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
                    flexDirection: "row",
                    marginTop: 10,
                    paddingHorizontal: 10,
                    borderBottomWidth: 1,
                    borderBottomColor: "grey",
                }}>
                    <View style={{
                        flex: 2 / 3,
                        backgroundColor: WHITE,
                    }}>
                        <Text style={{
                            color: BLACK,
                            fontSize: 17,
                            fontFamily: COMICS,
                            marginLeft: 20
                        }}>
                            Autoplay Videos
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
                    flexDirection: "row",
                    marginTop: 10,
                    paddingHorizontal: 10,
                    borderBottomWidth: 1,
                    borderBottomColor: "grey",
                }}>
                    <View style={{
                        flex: 2 / 3,
                        backgroundColor: WHITE,
                    }}>
                        <Text style={{
                            color: BLACK,
                            fontSize: 17,
                            fontFamily: COMICS,
                            marginLeft: 20
                        }}>
                            Sound Effects
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
                    flexDirection: "row",
                    marginTop: 10,
                    paddingHorizontal: 10,
                    borderBottomWidth: 1,
                    borderBottomColor: "grey",
                }}>
                    <View style={{
                        flex: 2 / 3,
                        backgroundColor: WHITE,
                    }}>
                        <Text style={{
                            color: BLACK,
                            fontSize: 17,
                            fontFamily: COMICS,
                            marginLeft: 20
                        }}>
                            Show Profile Photos
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
                    flexDirection: "row",
                    marginTop: 10,
                    paddingHorizontal: 10,
                    borderBottomWidth: 1,
                    borderBottomColor: "grey",
                }}>
                    <View style={{
                        flex: 2 / 3,
                        backgroundColor: WHITE,


                    }}>
                        <Text style={{
                            color: BLACK,
                            fontSize: 17,
                            fontFamily: COMICS,
                            marginLeft: 20
                        }}>
                            Feed Prefference
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
                        }}>People you follow
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
                <View style={{ borderBottomWidth: 8, borderBottomColor: "grey" }} />

                <View style={{ height: 20 }} />

                <View style={{
                    height: 10,

                }} />
                <Text style={{
                    color: BLACK,
                    fontSize: 22,
                    fontWeight: "bold",
                    marginLeft: 20
                }}>
                    Account Management
                </Text>
                <View style={{
                    flexDirection: "row",
                    marginTop: 10,
                    paddingHorizontal: 10,
                    borderBottomWidth: 1,
                    borderBottomColor: "grey",
                }}>
                    <View style={{
                        flex: 2 / 3,
                        backgroundColor: WHITE,
                    }}>
                        <Text style={{
                            color: BLACK,
                            fontSize: 17,
                            fontFamily: COMICS,
                            marginLeft: 20
                        }}>
                            Hibermate Account
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
                    flexDirection: "row",
                    marginTop: 10,
                    paddingHorizontal: 10,
                    borderBottomWidth: 1,
                    borderBottomColor: "grey",
                }}>
                    <View style={{
                        flex: 2 / 3,
                        backgroundColor: WHITE,
                    }}>
                        <Text style={{
                            color: BLACK,
                            fontSize: 17,
                            fontFamily: COMICS,
                            marginLeft: 20
                        }}>
                            Close Account
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
                                width:30
                            }}
                        />
                    </View>
                </View>

            </ScrollView>
        </>
    )
}