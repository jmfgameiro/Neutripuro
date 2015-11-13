package pt.neutripuro;

import io.dropwizard.Application;
import io.dropwizard.Configuration;
import io.dropwizard.assets.AssetsBundle;
import io.dropwizard.setup.Bootstrap;
import io.dropwizard.setup.Environment;

public class NeutripuroApplication extends Application< Configuration > {
	
	public static void main( String[] args ) throws Exception {
		String[] myArgs = new String[ 2 ];
		myArgs[ 0 ] = "server";
		myArgs[ 1 ] = "neutripuro.yml";
		new NeutripuroApplication().run( myArgs );
	}
	
	
	@Override
    public void initialize( Bootstrap< Configuration > bootstrap ) {
		bootstrap.addBundle( new AssetsBundle( "/css", "/css", null, "css" ) );
		bootstrap.addBundle( new AssetsBundle( "/images", "/images", null, "images" ) );
		bootstrap.addBundle( new AssetsBundle( "/js", "/js", null, "js" ) );
		bootstrap.addBundle( new AssetsBundle( "/html", "/", "index.html", "html" ) );
		bootstrap.addBundle( new AssetsBundle( "/images/favicon.ico", "/favicon.ico", null, "favicon" ) );
	}
	
	
	@Override
	public void run( Configuration configuration, Environment environment ) throws Exception {}

}
