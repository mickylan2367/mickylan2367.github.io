<?xml version="1.0" encoding="shift_jis" ?>
<!-- @author g2105011 Tomonori Sato -->
<!-- @version 0.55 2006/5/20 -->
<!-- @Modify m1205099 Akira Shinoda-->
<!-- @Modify m1205121 Takahiro Shima-->
<!-- @version undefined 2007/6/12 -->
<!-- @Modify Kei Itou for supporting "course" -->
<!-- @Modify Ayahiko Niimi 2014/04/04 -->

<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform" >

<xsl:output method="html" encoding="shift_jis" indent="yes" 
	doctype-public="-//W3C//DTD HTML 4.01 Transitional//EN" 
	doctype-system="http://www.w3.org/TR/html4/loose.dtd"/>


<!-- 全体設定 -->
<xsl:template match="/report"> 

<HTML>
	<HEAD>
		<META http-equiv="Content-Type" content="text/html; charset=shift_jis" /> 
		<META http-equiv="Content-Style-Type" content="text/css" />
		<TITLE><xsl:value-of select="title" /></TITLE>
		<STYLE type="text/css">
			BODY{
				line-height: 150%;
			}
			TABLE{	
				margin-left:30px;
				background-color:#ffffff;
				width:95%;
			}
			PRE{
			  white-space: -moz-pre-wrap; /* Mozilla */
			  white-space: -pre-wrap;     /* Opera 4-6 */
			  white-space: -o-pre-wrap;   /* Opera 7 */
			  white-space: pre-wrap;      /* CSS3 */
			  word-wrap: break-word;      /* IE 5.5+ */
			  background-color:#EEEEEE;
			  font-family:'ＭＳ Ｐゴシック', Osaka, 'ヒラギノ角ゴ Pro W3', sans-selif;
			  font-size:medium;
			}
			#title{	
				border-left:solid 10px #000055;
				border-bottom:solid 2px #000055;
				background-color:#f0f0ff;
				line-height:1.2em;
			}
			#copyright{
				text-align:center;
				border-bottom:1px solid #7777aa;
				border-top:1px solid #7777aa;
				font-size:80%;
				color:#7777aa;
				margin-top:50px;
			}
			.header{
				border-left:solid 10px #000055;
				border-bottom:solid 2px #000055;
				background-color:#f0f0ff;
			}
			.command{
				text-decoration:none;
				font-size:larger;
				font-weight:bold;
				color: #3333AA;
			}
			.word{
				text-decoration:none;
				font-size:larger;
				font-weight:bold;
				color: #DD4400;
			}
			.directory{
				text-decoration:none;
				font-size:larger;
				font-weight:bold;
				color: #009900;
			}
			.file{
				text-decoration:none;
				font-size:larger;
				font-weight:bold;
				color: #009900;
			}
			.proc_header{
				border-left:solid 5px #007799;
				border-bottom:solid 1px #003377;
				background-color:#f0f5ff;
				margin-left:30px;
				margin-top:10px;
				font-weight:bold;
			}
			.content{
				margin-left:30px;
				width:95%;
				background-color:#f0f0f0;
			}
		</STYLE>
	</HEAD>
	<BODY>
		<!-- レポートの情報 -->
		<H1 id="title"><xsl:value-of select="title" /></H1>
		<DIV align="right">提出日：<xsl:value-of select="date" /></DIV>
		<xsl:for-each select="executiondate">
			<DIV align="right">作業日：<xsl:value-of select="."/></DIV>
		</xsl:for-each>
		<DIV align="right"><xsl:value-of select="department" /></DIV>
		<DIV align="right"><xsl:value-of select="course" /></DIV>
		<DIV align="right"><xsl:value-of select="studentid" /></DIV>
		<DIV align="right"><xsl:value-of select="name" /></DIV>
		<DIV align="right">クラス：<xsl:value-of select="class" /></DIV>
		<DIV align="right"><xsl:value-of select="group" />班</DIV>
		<!-- 本文 -->
		<xsl:apply-templates />	
		<!-- 作者情報 -->
		<DIV id="copyright">Style Sheet modify : shino, shima 2007.6.14. : redistribution free</DIV>
	</BODY>
</HTML>
</xsl:template> 


<!-- xsl:apply-templatesで2重に出ないよう、つぶす。 -->
<xsl:template match="/report/title" />
<xsl:template match="/report/date" />
<xsl:template match="/report/executiondate" />
<xsl:template match="/report/department" />
<xsl:template match="/report/course" />
<xsl:template match="/report/studentid" />
<xsl:template match="/report/name" />
<xsl:template match="/report/class" />
<xsl:template match="/report/group" />


<!-- キーワード -->
<xsl:template match="/report/keywords">
	<H2 class="header">キーワード</H2>
	<TABLE border="0" cellspacing="5">
		<xsl:for-each select="keyword">
			<TR>
				<TD>
					<B><xsl:number value="position()" format="1."/></B>
				</TD>
            	<TD style="background-color:#f0f0f0;">
					<!-- procのキーワードのリンクから飛んで来れるようにする -->
					<xsl:element name="A">
						<xsl:attribute name="name"><xsl:value-of select="@name"/></xsl:attribute>
						<xsl:attribute name="class"><xsl:value-of select="@type"/></xsl:attribute>
						<xsl:value-of select="@name"/>
					</xsl:element>
				</TD>
				<TD style="background-color:#f0f0f0;">
					<xsl:value-of select="."/>
				</TD>
			</TR>
		</xsl:for-each>
	</TABLE>
</xsl:template>


<!-- 手順全体 -->
<xsl:template match="/report/procedures">
	<H2 class="header">手順</H2>
	<xsl:apply-templates />
</xsl:template>


<!-- 各手順 -->
<xsl:template match="/report/procedures/proc">

	<!-- 手順見出し -->
	<DIV class="proc_header"><xsl:value-of select="@title"/></DIV>
	<!-- 改行がどうにもならんのでpreでごり押し。 -->
	<PRE style="width:auto; margin-left:40px;">
		<xsl:apply-templates />
	</PRE>

</xsl:template>



<!-- 概要 -->
<xsl:template match="/report/abstract">
	<H2 class="header">概要</H2>
    <DIV class="content">
    	<xsl select="abstract">
        	<xsl:call-template name="replace">
            	<xsl:with-param name="str" select="."/>
            </xsl:call-template>
        </xsl>
    </DIV>
</xsl:template>


<!-- 評価 -->
<xsl:template match="/report/evaluation">
	<H2 class="header">評価</H2>
    <DIV class="content">
    	<xsl select="evaluation">
    		<xsl:call-template name="replace">
           		<xsl:with-param name="str" select="."/>
         	</xsl:call-template>
        </xsl>
    </DIV>
</xsl:template>


<!-- コメント -->
<xsl:template match="/report/comment">
	<H2 class="header">コメント</H2>
    <DIV class="content">
		<xsl select="evaluation">
			<xsl:call-template name="replace">
				<xsl:with-param name="str" select="."/>
			</xsl:call-template>
		</xsl>
    </DIV>
</xsl:template>


<!-- 参考文献 -->
<xsl:template match="/report/references">
	<H2 class="header">参考文献</H2>
    <TABLE border="0" cellspacing="5">
		<xsl:for-each select="refitem">
			<TR>
				<TD><B><xsl:number value="position()" format="1."/></B></TD>
				<TD style="background-color:#f0f0f0;"><xsl:value-of select="."/></TD>
			</TR>
		</xsl:for-each>
	</TABLE>
</xsl:template>


<!-- 改行をBRに置換 -->
<xsl:template name="replace">
	<xsl:param name="str" /> 
	<xsl:choose>
	<xsl:when test="contains($str,'&#x0A;')">
		<xsl:value-of select="substring-before($str,'&#x0A;')"/>		
		<BR /> 
		<xsl:call-template name="replace">
			<xsl:with-param name="str" select="substring-after($str,'&#x0A;')" /> 
		</xsl:call-template>
	</xsl:when>
	<xsl:otherwise>
		<xsl:value-of select="$str"/>	
	</xsl:otherwise>
	</xsl:choose>		
</xsl:template>



<!-- コマンド -->
<xsl:template match="report/procedures/proc/command|file">
	<!-- キーワードへのリンク -->
	<xsl:element name="A">
		<xsl:attribute name="href">
			#<xsl:value-of select="." />
		</xsl:attribute>
		<xsl:attribute name="class">command</xsl:attribute>
		<SPAN style="margin-right:2px;"><xsl:copy-of select="." /></SPAN>
	</xsl:element>
</xsl:template>
<!-- 新出単語 -->
<xsl:template match="word">
	<xsl:element name="A">
		<xsl:attribute name="href">
			#<xsl:value-of select="." />
		</xsl:attribute>
		<xsl:attribute name="class">word</xsl:attribute>
		<xsl:copy-of select="." />
	</xsl:element>
</xsl:template>
<!-- ディレクトリ -->
<xsl:template match="directory">
	<xsl:element name="A">
		<xsl:attribute name="href">
			#<xsl:value-of select="." />
		</xsl:attribute>
		<xsl:attribute name="class">directory</xsl:attribute>
		<SPAN style="margin-left:4px;"><xsl:copy-of select="." /></SPAN>
	</xsl:element>
</xsl:template>
<!-- ファイル -->
<xsl:template match="file">
	<xsl:element name="A">
		<xsl:attribute name="href">
			#<xsl:value-of select="." />
		</xsl:attribute>
		<xsl:attribute name="class">file</xsl:attribute>
		<SPAN style="margin-left:4px;"><xsl:copy-of select="." /></SPAN>
	</xsl:element>
</xsl:template>


</xsl:stylesheet>


