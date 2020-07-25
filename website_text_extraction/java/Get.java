import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import java.io.IOException;
import java.net.URI;

public class Get {
  public static void main(String[] args) throws IOException {
    HttpClient client = HttpClient.newHttpClient();
    HttpRequest request = HttpRequest.newBuilder()
    .uri(URI.create("https://websitetextextraction.apifex.com/api/v1/extract?url=https%3A%2F%2Fhome.cern%2Fnews%2Fnews%2Fphysics%2Fneutron-stars-show-their-cores"))
    .build();

    client.sendAsync(request, HttpResponse.BodyHandlers.ofString())
    .thenApply(HttpResponse::body)
    .thenAccept(System.out::println)
    .join();
  }
}