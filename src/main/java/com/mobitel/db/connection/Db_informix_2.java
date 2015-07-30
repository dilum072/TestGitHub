package com.mobitel.db.connection;

import java.sql.*;
import java.util.logging.Level;
import java.util.logging.Logger;
import javax.naming.Context;
import javax.naming.InitialContext;
import javax.rmi.PortableRemoteObject;
import javax.sql.DataSource;

public class Db_informix_2 {

    Connection connection = null;

    public Connection congsmcpsm() {
        try {
            String jndiPath = "java:MyAccountBack_INFORMIX_DS"; //The exact prefix here has a lot to do with clustering, etc., but if you are using one JBoss instance standalone, this works.
            Context ctx = new InitialContext();
            DataSource ds = (DataSource) PortableRemoteObject.narrow(ctx.lookup(jndiPath), DataSource.class);
            connection = ds.getConnection();
            //Class.forName("com.informix.jdbc.IfxDriver");
            ///  connection = DriverManager.getConnection("jdbc:informix-sqli://192.168.2.211:49553/gsmcpsm:INFORMIXSERVER=DEVELOPMENT_IT;user=manjusam;password=manju88");
            //connection = DriverManager.getConnection("jdbc:informix-sqli://192.168.2.95:1528/gsmcpsm:INFORMIXSERVER=online;user=javatest;password=javatest");

        } catch (Exception e) {
            System.out.println("Error Comes from database.Dbgsmcpsm.java -----------> My Account New Test Connection pool error");
            Logger.getLogger(Db_informix_2.class.getName()).log(Level.SEVERE, null, e);
            e.printStackTrace();
        } /*catch (Exception ex) {
         Logger.getLogger(Db_informix_2.class.getName()).log(Level.SEVERE, null, ex);
         }*/

        return connection;
    }

}
