export type RootStackParamList = {
  home: undefined;
};

export type HomeDrawerScreenProps<T extends keyof HomeDrawerParamList> =
  CompositeScreenProps<
    DrawerScreenProps<HomeDrawerParamList, T>,
    RootStackScreenProps<keyof RootStackParamList>
  >;
