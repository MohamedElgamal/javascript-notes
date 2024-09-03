/**History object controls the the history of visited tab in the current selected tab */
/**
 * Lets assume i have tab in the page that has been visted are ordered as follow (mic edage home page , google , facebook , iti)
 * and the current page is google
 * if i writed the following code 
 */
history.forward();
/**than the current opened page in this tab will be facebook 
 * and if i write the following
*/
history.back();
/**current selected page in the tab will be google */
history.go(2) // will go to iti page 
history.go(-2) // will return to google page
history.length // will return the number of opened pag in this tab