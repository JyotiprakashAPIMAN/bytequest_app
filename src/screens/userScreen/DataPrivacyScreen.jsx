import React from "react";
import { CustomHeader } from "../../component/common/CustomHeader";
import { Image, ScrollView, Text, View } from "react-native";
import { BLACK, WHITE } from "../../constants/color";
import { COMICS } from "../../constants/fontPath";
import { RIGHTARROW } from "../../constants/imagePath";

export default DataPrivacyScreen = () => {
    return (
        <>
            <CustomHeader
                leftHeaderBtn={true}
                midtxt="Data Privacy"
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
                    How Adc use your data
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
                        backgroundColor: WHITE

                    }}>
                        <Text style={{
                            color: BLACK,
                            fontSize: 17,
                            fontFamily: COMICS,
                            marginLeft: 20
                        }}>
                            Manage your data & activity
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
                        }}>Get a copy of your data</Text>
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
                            Search History
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
                        }}>
                            Personal Demographic Information
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
                        }}>
                            Social economic & workshop reserach
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
                    Who can reach you
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
                            Invitations to connect
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
                            Invitations from your network
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
                            Messages
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
                            Research invites
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
                    Message experience
                </Text>
                <View style={{ height: 20 }} />
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
                            Focused Inbox
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
                            Read reciept & typing indicators
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
                            messaging suggestions
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
                            Message nudges
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
                            Automated detection harmful content
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
                    workshop & Boot Camp preferences
                </Text>
                <View style={{ height: 20 }} />
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
                            Boot camp settings
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
                            Workshop settings
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
                        }}>signal you interest to your followers
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
                        }}>Stored bootcamp or workshop applicant account
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
                    other Application
                </Text>
                <View style={{ height: 20 }} />
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
                            Permitted service
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
                            Microsoft word
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
            </ScrollView>
        </>
    )
}