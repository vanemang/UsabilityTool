<%@ Page Title="Home Page" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeBehind="StartingPage.aspx.cs" Inherits="UsabilityTool._Default" %>


<asp:Content runat="server" ID="container" ContentPlaceHolderID="MainContent">  
    <script type= "text/javascript">


        $(function EnterEvent(e) {
            if (e.keyCode == 13) {
                __doPostBack('<%=Button1%>', "");
        }
    });

    </script>

    <div id="url">
        <asp:TextBox ID="URLBox" runat="server" placeholder="Test your own site... type the url and hit enter" onkeypress="return EnterEvent(event)"></asp:TextBox>
        <asp:Button ID="Button1" runat="server" style="display:none" Text="Submit" OnClick="Button1_Click1" />
        <br />
        <br />
        <asp:Label ID="Result" runat="server" Height="200px" Width="1005px"></asp:Label> 
    </div>
</asp:Content>
