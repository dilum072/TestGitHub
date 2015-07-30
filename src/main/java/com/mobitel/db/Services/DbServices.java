/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.mobitel.db.Services;

import com.mobitel.common.UserInfoDao;
import com.mobitel.db.connection.Db_informix_2;
import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.logging.Level;
import java.util.logging.Logger;

/**
 *
 * @author manjulas
 */
public class DbServices {

    UserInfoDao userInfoObj;

    public UserInfoDao getUserInformation(String userId) {
        Db_informix_2 dbconnection = new Db_informix_2();
        Connection con = null;
        try {
            con = dbconnection.congsmcpsm();
            String sql = "select *\n"
                    + "from webdata:userinfo ui,webdata:userinfo_desc ud\n"
                    + "where ui.user_id=ud.user_id and ud.added_date=ui.regdate\n"
                    + "and ui.user_id='" + userId + "'";
            ResultSet rs = con.createStatement().executeQuery(sql);
            if (rs.next()) {
                userInfoObj = new UserInfoDao();
                userInfoObj.setSalutation(rs.getString("salutation"));
                userInfoObj.setFname(rs.getString("fname"));
                userInfoObj.setLname(rs.getString("lname") + " ");
                userInfoObj.setNic(rs.getString("nic"));
                userInfoObj.setContactNumber(rs.getString("contact_no"));
                userInfoObj.setEmail(rs.getString("email"));
                userInfoObj.setUserId(rs.getString("user_id"));
                userInfoObj.setMobileNumber(rs.getString("user_id"));
                if (rs.getString("language").equals("1")) {
                    userInfoObj.setLanguage("1");
                } else if (rs.getString("language").equals("2")) {
                    userInfoObj.setLanguage("2");
                } else if (rs.getString("language").equals("3")) {
                    userInfoObj.setLanguage("3");
                }
            } else {
                String infoUserinfo = "select * from webdata:userinfo ui where  ui.user_id='" + userId + "' ";
                ResultSet rsObj = con.createStatement().executeQuery(infoUserinfo);
                if (rsObj.next()) {
                    userInfoObj = new UserInfoDao();
                    userInfoObj.setSalutation("Mr.");
                    userInfoObj.setFname(rsObj.getString("fname"));
                    userInfoObj.setLname(rsObj.getString("lname") + " ");
                    userInfoObj.setNic("");
                    userInfoObj.setContactNumber(rsObj.getString("contact_no"));
                    userInfoObj.setEmail(rsObj.getString("email"));
                    userInfoObj.setUserId(rsObj.getString("user_id"));
                    userInfoObj.setMobileNumber(rsObj.getString("user_id"));
                    userInfoObj.setLanguage("3");
                }
            }
        } catch (Exception e) {
            System.out.println("Default information Getting Error !" + e);
        } finally {
            try {
                if (con != null | !con.isClosed()) {
                    con.close();
                }
            } catch (SQLException ex) {
                Logger.getLogger(DbServices.class.getName()).log(Level.SEVERE, null, ex);
            }
        }
        return userInfoObj;
    }

}
