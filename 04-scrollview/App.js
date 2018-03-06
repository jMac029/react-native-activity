import React from 'react';
import { StyleSheet, Text, View, ScrollView, Dimensions } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View>
                {/* Header */}
                <View style={styles.header}>
                    <Text style={styles.headerText}>The Corgis Times</Text>
                </View>

                {/* Body */}
                <View style={styles.body}>
                    <ScrollView>
                        <Text style={styles.bodyHeadline}>Latest Story</Text>

                        <Text style={styles.bodyText}>
                            Bacon ipsum dolor amet capicola t-bone andouille
                            venison. Leberkas shankle turducken, cow swine bacon
                            drumstick chicken corned beef. Prosciutto landjaeger
                            brisket hamburger leberkas ground round ribeye
                            alcatra frankfurter chicken shank capicola doner
                            meatloaf. Pancetta beef rump turducken turkey flank
                            tenderloin burgdoggen venison pastrami picanha cow
                            short loin t-bone chicken. Venison shoulder filet
                            mignon pancetta sausage, spare ribs picanha
                            andouille brisket frankfurter meatloaf beef ribs
                            tenderloin ham hock. Shank strip steak bacon
                            bresaola boudin frankfurter ball tip jerky shankle.
                        </Text>

                        <Text style={styles.bodyText}>
                            Bacon ipsum dolor amet capicola t-bone andouille
                            venison. Leberkas shankle turducken, cow swine bacon
                            drumstick chicken corned beef. Prosciutto landjaeger
                            brisket hamburger leberkas ground round ribeye
                            alcatra frankfurter chicken shank capicola doner
                            meatloaf. Pancetta beef rump turducken turkey flank
                            tenderloin burgdoggen venison pastrami picanha cow
                            short loin t-bone chicken. Venison shoulder filet
                            mignon pancetta sausage, spare ribs picanha
                            andouille brisket frankfurter meatloaf beef ribs
                            tenderloin ham hock. Shank strip steak bacon
                            bresaola boudin frankfurter ball tip jerky shankle.
                        </Text>

                        <Text style={styles.bodyText}>
                            Bacon ipsum dolor amet capicola t-bone andouille
                            venison. Leberkas shankle turducken, cow swine bacon
                            drumstick chicken corned beef. Prosciutto landjaeger
                            brisket hamburger leberkas ground round ribeye
                            alcatra frankfurter chicken shank capicola doner
                            meatloaf. Pancetta beef rump turducken turkey flank
                            tenderloin burgdoggen venison pastrami picanha cow
                            short loin t-bone chicken. Venison shoulder filet
                            mignon pancetta sausage, spare ribs picanha
                            andouille brisket frankfurter meatloaf beef ribs
                            tenderloin ham hock. Shank strip steak bacon
                            bresaola boudin frankfurter ball tip jerky shankle.
                        </Text>

                        <Text style={styles.bodyText}>
                            Bacon ipsum dolor amet capicola t-bone andouille
                            venison. Leberkas shankle turducken, cow swine bacon
                            drumstick chicken corned beef. Prosciutto landjaeger
                            brisket hamburger leberkas ground round ribeye
                            alcatra frankfurter chicken shank capicola doner
                            meatloaf. Pancetta beef rump turducken turkey flank
                            tenderloin burgdoggen venison pastrami picanha cow
                            short loin t-bone chicken. Venison shoulder filet
                            mignon pancetta sausage, spare ribs picanha
                            andouille brisket frankfurter meatloaf beef ribs
                            tenderloin ham hock. Shank strip steak bacon
                            bresaola boudin frankfurter ball tip jerky shankle.
                        </Text>
                    </ScrollView>
                </View>

                {/* Footer */}
                <View style={styles.footer}>
                  <Text style={styles.footerText}>Copyright {(new Date()).getFullYear()}</Text>
                </View>
            </View>
    );
  }
}

const { height } = Dimensions.get('window');

const heightInc = height / 24;

const styles = StyleSheet.create({
  header: {
    paddingTop: heightInc * 1,
    paddingBottom: heightInc * .5,
    alignItems: "center",
    backgroundColor: "crimson"
  },
  headerText: {
    fontSize: heightInc * 1.5, 
    margin: 0,
    padding: 0,
    color: "white",
    fontFamily: "Academy Engraved LET",
    fontWeight: "500"
  },
  body: {
    height: heightInc * 17.5,
    margin: heightInc * .5
  },

  bodyText: {
    color: "black",
    fontSize: 18, 
    fontWeight: "500",
    lineHeight: 24,
    marginBottom: 20, 
    textAlign: "justify"
  },

  bodyHeadline: {
    fontSize: 36,
    textAlign: "center",
    fontFamily: "Arial",
    margin: 10,
    marginBottom: 20 
  },

  footer: {
    paddingTop: heightInc * .75,
    paddingBottom: heightInc * 1,
    alignItems: "center",
    backgroundColor: "crimson"
  },

  footerText: {
    fontSize: heightInc * .5,
    color: "white"
  }

});
