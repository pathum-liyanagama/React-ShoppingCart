import React from "react";

import "./MyOrderPage.css";
import Table from "../Common/Table";

const MyOrderPage = () => {
  return (
    <section className="align_center myorder_page">
      <Table headings={["Order", "Products", "Total", "Status"]}>
        <tbody>
          <tr>
            <td>1234567</td>
            <td>iPhone 14, Samsung Galaxy S23</td>
            <td>$1998</td>
            <td>Pending</td>
          </tr>
        </tbody>
      </Table>
    </section>
  );
};

export default MyOrderPage;
